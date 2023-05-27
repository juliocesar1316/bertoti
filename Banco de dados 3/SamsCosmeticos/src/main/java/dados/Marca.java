package dados;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "marca")
public class Marca extends PanacheEntityBase{
	@Id
	@SequenceGenerator(
            name = "marca_id",
            sequenceName = "marca_id_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "marca_id")
	private Long id;
	private String nomeMarca;
	private String descricaoMarca;
	
	
	public String getNomeMarca() {
		return nomeMarca;
	}
	public void setNomeMarca(String nomeMarca) {
		this.nomeMarca = nomeMarca;
	}
	public String getDescricaoMarca() {
		return descricaoMarca;
	}
	public void setDescricaoMarca(String descricaoMarca) {
		this.descricaoMarca = descricaoMarca;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
}
