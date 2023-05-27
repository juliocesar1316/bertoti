package Servicos;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Produto;
import dto.ProdutoDto;


@ApplicationScoped
public class ProdutoServico {
	
	public List<Produto> listProduto(){
		return Produto.listAll();
	}
	
	@Transactional
	public Produto cadastroProduto(ProdutoDto produtoDto) {
		Produto produto = new Produto();

		
		produto.setTituloProduto(produtoDto.getTituloProduto());
		produto.setSubTituloProduto(produtoDto.getSubTituloProduto());
		produto.setPreco(produtoDto.getPreco());
		produto.setDescricao(produtoDto.getDescricao());		
		produto.setCategoria(produtoDto.getCategoria());
		produto.setMarca(produtoDto.getMarca());
		produto.setQuantidade(produtoDto.getQuantidade());
		produto.setLinha(produtoDto.getLinha());
		produto.setCodigoProduto(produtoDto.getCodigoProduto());
		produto.persist();
		
		return produto;
	}
	
	@Transactional
	public void updateProduto(Long id, ProdutoDto produtoDto) {
		
		Produto produto = new Produto();
		
		Optional<Produto> produtoOp = Produto.findByIdOptional(id);
		
		if (produtoOp.isEmpty()) {
			throw new NullPointerException("Produto not found");
		}
		
		produto = produtoOp.get();
		produto.setTituloProduto(produtoDto.getTituloProduto());
		produto.setSubTituloProduto(produtoDto.getSubTituloProduto());
		produto.setPreco(produtoDto.getPreco());
		produto.setDescricao(produtoDto.getDescricao());		
		produto.setCategoria(produtoDto.getCategoria());
		produto.setMarca(produtoDto.getMarca());
		produto.setQuantidade(produtoDto.getQuantidade());
		produto.setLinha(produtoDto.getLinha());
		produto.setCodigoProduto(produtoDto.getCodigoProduto());
		produto.persist();
	}
	
	@Transactional
	public void deleteProduto(Long id) {
		
		Optional<Produto> produtoOp = Produto.findByIdOptional(id);
		
		if (produtoOp.isEmpty()) {
			throw new NullPointerException("Produto not found");
		}
		
		Produto produto = produtoOp.get();
		
		produto.delete();
	}
	
}
