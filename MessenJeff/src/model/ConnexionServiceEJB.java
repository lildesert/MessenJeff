package model;

import entities.Connexion;

import javax.ejb.Local;
import javax.ejb.Stateless;

@Stateless
@Local(ConnexionService.class)
public class ConnexionServiceEJB extends GenericCRUDServiceEJB<Connexion> implements ConnexionService {
	
}

