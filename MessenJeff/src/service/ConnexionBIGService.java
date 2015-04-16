package service;

import java.util.Date;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.xml.ws.Endpoint;

import entities.Connexion;
import model.ConnexionService;

@WebService
public class ConnexionBIGService {

	@Inject
    private ConnexionService connexionService;

    public void ConnexionBIGService() {
    }

    @WebMethod
    public int addConnexion(String name, String salle) {
        Connexion c = new Connexion();
        c.setNickname(name);
        c.addConnectionDates(new Date());
        c.setSalle(salle);
        connexionService.create(c);
        return c.getId();
    }
    
    public static void main(String[] args ){
        Endpoint.publish("http://localhost:8080/ConnexionBIGService", new ConnexionBIGService());
    }
}
