package controle;

import dados.Foto;
import dto.FotoRepository;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheRepositoryResource;
import io.quarkus.rest.data.panache.ResourceProperties;

@ResourceProperties(exposed = false)
public interface FotoResource extends PanacheRepositoryResource<FotoRepository,Foto, Long> {

}
