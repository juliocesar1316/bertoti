package Servicos;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import dados.Venda;
import dto.VendaDto;

@ApplicationScoped
public class VendaServico {

	public List<Venda> listVenda(){
		return Venda.listAll();
	}
	
	
	@Transactional
	public Venda cadastroVenda(VendaDto vendaDto) {
		Venda venda = new Venda();

		venda.setTituloProduto(vendaDto.getTituloProduto());
		
		venda.setSubTituloProduto(vendaDto.getSubTituloProduto());
		venda.setPreco(vendaDto.getPreco());
		venda.setDescricao(vendaDto.getDescricao());		
		venda.setCategoria(vendaDto.getCategoria());
		venda.setMarca(vendaDto.getMarca());
		venda.setQuantidade(vendaDto.getQuantidade());
		venda.setLinha(vendaDto.getLinha());
		venda.setCodigoProduto(vendaDto.getCodigoProduto());
		venda.persist();
		
		return venda;
	}
	
	@Transactional
	public void updateVenda(Long id, VendaDto vendaDto) {
		
		Venda venda = new Venda();
		
		Optional<Venda> vendaOp = Venda.findByIdOptional(id);
		
		if (vendaOp.isEmpty()) {
			throw new NullPointerException("Venda not found");
		}
		
		venda = vendaOp.get();
		venda.setTituloProduto(vendaDto.getTituloProduto());
		venda.setSubTituloProduto(vendaDto.getSubTituloProduto());
		venda.setPreco(vendaDto.getPreco());
		venda.setDescricao(vendaDto.getDescricao());		
		venda.setCategoria(vendaDto.getCategoria());
		venda.setMarca(vendaDto.getMarca());
		venda.setQuantidade(vendaDto.getQuantidade());
		venda.setLinha(vendaDto.getLinha());
		venda.setCodigoProduto(vendaDto.getCodigoProduto());
		venda.persist();
	}
	
	@Transactional
	public void deleteVenda(Long id) {
		
		Optional<Venda> vendaOp = Venda.findByIdOptional(id);
		
		if (vendaOp.isEmpty()) {
			throw new NullPointerException("Venda not found");
		}
		
		Venda venda = vendaOp.get();
		
		venda.delete();
	}
	
	
}
