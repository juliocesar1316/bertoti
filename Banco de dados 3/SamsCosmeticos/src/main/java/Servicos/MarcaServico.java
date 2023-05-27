package Servicos;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Marca;
import dto.MarcaDto;

@ApplicationScoped
public class MarcaServico {
	public List<Marca> listMarca(){
		return Marca.listAll();
	}

	@Transactional
	public Marca cadastroMarca(MarcaDto marcaDto) {
		Marca marca= new Marca();
		
		marca.setNomeMarca(marcaDto.getNomeMarca());
		marca.setDescricaoMarca(marcaDto.getDescricaoMarca());
		marca.persist();
		
		return marca;
	}
	
	@Transactional
	public void updateMarca(Long id, MarcaDto marcaDto) {
		
		Marca marca = new Marca();
		
		Optional<Marca> marcaOp = Marca.findByIdOptional(id);
		
		if (marcaOp.isEmpty()) {
			throw new NullPointerException("Marca not found");
		}
		
		marca = marcaOp.get();
		marca.setNomeMarca(marcaDto.getNomeMarca());
		marca.setDescricaoMarca(marcaDto.getDescricaoMarca());
		marca.persist();
		
	}
	
	@Transactional
	public void deleteMarca(Long id) {
		
		Optional<Marca> marcaOp = Marca.findByIdOptional(id);
		
		if (marcaOp.isEmpty()) {
			throw new NullPointerException("Marca not found");
		}
		
		Marca marca = marcaOp.get();
		
		marca.delete();
	}
	
}
