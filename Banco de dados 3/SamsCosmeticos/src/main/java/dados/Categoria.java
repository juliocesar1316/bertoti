package dados;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "categoria")
public class Categoria extends PanacheEntityBase {
	@Id
	@SequenceGenerator(
            name = "categoria_id",
            sequenceName = "categoria_id_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_id")
	private Long id;
	private String nomeCategoria;
	private String descricaoCategoria;
	
	public String getNomeCategoria() {
		return nomeCategoria;
	}
	public void setNomeCategoria(String nomeCategoria) {
		this.nomeCategoria = nomeCategoria;
	}
	public String getDescricaoCategoria() {
		return descricaoCategoria;
	}
	public void setDescricaoCategoria(String descricaoCategoria) {
		this.descricaoCategoria = descricaoCategoria;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
