package service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;

import model.ConnexionService;
import entities.Connexion;
 
@Path("ConnexionRESTService")
public class ConnexionRESTService {
    @Context
    private UriInfo context;
    
    @Inject
    private ConnexionService connexionService;
    
    /** Creates a new instance of ConnexionService */
    public ConnexionRESTService() {
    }
 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("findConnexionByName/{name}")
    public List<Connexion> findByNickName(@PathParam("name") String name) {
    	Map<String, Object> param = new HashMap<>();
		param.put("name", name);
		return connexionService.findWithNamedQuery("Connexion.findByNickname", param);
    }
}