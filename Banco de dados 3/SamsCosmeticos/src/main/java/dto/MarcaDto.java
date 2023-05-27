package dto;

public class MarcaDto {
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
