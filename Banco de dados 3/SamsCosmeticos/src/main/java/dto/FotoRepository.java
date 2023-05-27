package dto;

import javax.enterprise.context.ApplicationScoped;

import dados.Foto;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class FotoRepository implements PanacheRepository<Foto>{
	
	public Foto findByName(String fileName) {
        return find("fileName", fileName).firstResult();
    }
}
