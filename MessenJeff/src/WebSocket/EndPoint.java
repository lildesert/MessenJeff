package WebSocket;

import java.io.IOException;
import java.util.Date;

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

@ServerEndpoint(value = "/chat/{room}", encoders = MessageEncoder.class, decoders = MessageDecoder.class)
public class EndPoint {

    private final Logger log = LogManager.getLogger(getClass().getName());
    
    @Inject
	private ConnexionService connexionService;

    @OnOpen
    public void open(final Session session, @PathParam("room") final String room) {
        log.info("Ouverture de la session, room: " + room);
        System.out.println("test");
        
        Connexion c = new Connexion();
        c.setNickname("Ju");
        c.setSalle(room);
        c.addConnectionDates(new Date());
        connexionService.create(c);
        
        session.getUserProperties().put("room", room);
    }

    @OnMessage
    public void onMessage(final Session session, final Message chatMessage) {
    	log.info("reception message");
        String room = (String) session.getUserProperties().get("room");
        try {
            for (Session s : session.getOpenSessions()) {
                if (s.isOpen() && room.equals(s.getUserProperties().get("room"))) {
                    s.getBasicRemote().sendObject(chatMessage);
                }
            }
        } catch (IOException | EncodeException e) {
            log.log(Level.WARN, "error onMessage", e);
        }
    }
}
