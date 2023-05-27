package dados;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "produto")
public class Produto extends PanacheEntityBase{
	
	@Id
	@SequenceGenerator(
            name = "produto_id",
            sequenceName = "produto_id_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_id")
	private Long id;
	private String tituloProduto;
	private String subTituloProduto;
	private Double preco;
	private String descricao;
	private String categoria;
	private String marca;
	private Integer quantidade;
	private String linha;
	private Long codigoProduto;
	
	public String getTituloProduto() {
		return tituloProduto;
	}
	public void setTituloProduto(String tituloProduto) {
		this.tituloProduto = tituloProduto;
	}

	public String getSubTituloProduto() {
		return subTituloProduto;
	}

	public void setSubTituloProduto(String subTituloProduto) {
		this.subTituloProduto = subTituloProduto;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public String getLinha() {
		return linha;
	}

	public void setLinha(String linha) {
		this.linha = linha;
	}
	
	public Long getCodigoProduto() {
		return codigoProduto;
	}
	public void setCodigoProduto(Long codigoProduto) {
		this.codigoProduto = codigoProduto;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	
	
	
}
