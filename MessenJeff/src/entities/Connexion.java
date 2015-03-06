package entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.validation.constraints.NotNull;

@Entity()
public class Connexion {

	@Id
	@GeneratedValue
	private int id;
	
	@NotNull
	private String nickname;
	
	@NotNull
	private String salle;
	
	@ElementCollection
	@Temporal(javax.persistence.TemporalType.DATE)
	private List<Date> connectionDates;
	
	public Connexion()
	{
		this.connectionDates = new ArrayList<Date>();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getSalle() {
		return salle;
	}
	public void setSalle(String salle) {
		this.salle = salle;
	}
	public List<Date> getConnectionDates() {
		return connectionDates;
	}
	public void addConnectionDates(Date connectionDate) {
		this.connectionDates.add(connectionDate);
	}
}
