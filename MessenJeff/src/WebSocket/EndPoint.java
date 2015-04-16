package WebSocket;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.websocket.EncodeException;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import model.ConnexionService;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import entities.Connexion;

@ServerEndpoint(value = "/chat/{room}/{username}", encoders = MessageEncoder.class, decoders = MessageDecoder.class)
public class EndPoint {

    private final Logger log = LogManager.getLogger(getClass().getName());

    @Inject
    private ConnexionService connexionService;
    
    @OnOpen
    public void open(final Session session, @PathParam("room") final String room, @PathParam("username") final String username) {
        System.out.println("ouverture session, room : "+room);
        
        Connexion c = new Connexion();
        
        Map<String, Object> param = new HashMap<>();
		param.put("name", username);
		List<Connexion> connexionList = connexionService.findWithNamedQuery("Connexion.findByNickname", param);
        
		if(connexionList.size() == 0)
		{				
	        c.setNickname(username);
	        c.setSalle(room);
	        c.addConnectionDates(new Date());
	        connexionService.create(c);
		}
		else
		{
			c = connexionList.get(0);
			if(!c.getSalle().equals(room))
			{
				Connexion co = new Connexion();
				co.setNickname(username);
		        co.setSalle(room);
		        co.addConnectionDates(new Date());
		        connexionService.create(co);
			}
			else
			{
				c.addConnectionDates(new Date());
				connexionService.update(c);
			}
		}
		
        session.getUserProperties().put("room", room);
    }

    @OnMessage
    public void onMessage(final Session session, final Message chatMessage) {
    	System.out.println("reception message");
        String room = (String) session.getUserProperties().get("room");
        try {
            for (Session s : session.getOpenSessions()) {
                if (s.isOpen() && room.equals(s.getUserProperties().get("room"))) {
                    s.getBasicRemote().sendObject(chatMessage);
                }
            }
        } catch (IOException | EncodeException e) {
            System.out.println("error onMessage : "+e);
        	log.log(Level.WARN, "error onMessage", e);
        }
    }
}
