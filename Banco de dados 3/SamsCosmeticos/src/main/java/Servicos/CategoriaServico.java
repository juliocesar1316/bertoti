package Servicos;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Categoria;
import dto.CategoriaDto;

@ApplicationScoped
public class CategoriaServico {
	
	public List<Categoria> listCategoria(){
		return Categoria.listAll();
	}

	@Transactional
	public Categoria cadastroCategoria(CategoriaDto categoriaDto) {
		Categoria categoria = new Categoria();
		
		categoria.setNomeCategoria(categoriaDto.getNomeCategoria());
		categoria.setDescricaoCategoria(categoriaDto.getDescricaoCategoria());
		categoria.persist();
		
		return categoria;
	}
	
	@Transactional
	public void updateCategoria(Long id, CategoriaDto categoriaDto) {
		
		Categoria categoria = new Categoria();
		
		Optional<Categoria> categoriaOp = Categoria.findByIdOptional(id);
		
		if(categoriaOp.isEmpty()) {
			throw new NullPointerException("Categoria not found");
		}
		
		categoria = categoriaOp.get();
		categoria.setNomeCategoria(categoriaDto.getNomeCategoria());
		categoria.setDescricaoCategoria(categoriaDto.getDescricaoCategoria());
		categoria.persist();
	}
	
	@Transactional
	public void deleteCategoria(Long id) {
		
		Optional<Categoria> categoriaOp = Categoria.findByIdOptional(id);
		
		if (categoriaOp.isEmpty()) {
			throw new NullPointerException("Categoria not found");
		}
		
		Categoria categoria = categoriaOp.get();
		
		categoria.delete();
	}
}
