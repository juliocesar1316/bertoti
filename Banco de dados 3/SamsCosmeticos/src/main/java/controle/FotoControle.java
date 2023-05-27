package controle;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import Servicos.FotoServico;

import dados.Foto;
import dados.UploadFoto;
import dto.FotoDto;
import dto.FotoRepository;

@Path("upload")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.MULTIPART_FORM_DATA)

public class FotoControle {
	
	@Inject
    FotoRepository fotoRepository;

    @Inject
    FotoResource fotoResource;

    @Inject
    FotoServico fotoServico;
    
    @GET
    @Path("/fotos")
    public Response list() {
    	
    	List<Foto> foto = fotoRepository.listAll();
    	
    	List<FotoDto> fotoUp = new ArrayList<>();
    	
    	for (Foto fot: foto) {
    		FotoDto fotoDto = fotoServico.createResponse(fot);
    		fotoUp.add(fotoDto);
    	}
    	return Response.ok(fotoUp).build();
    }
    
    
    
    @POST
    @Transactional
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    
    public Response uploadFile(
        @MultipartForm UploadFoto uploadFoto) throws IOException {
        
        Foto foto = fotoServico.createRequest(uploadFoto);

        if(fotoRepository.isPersistent(foto)){
            foto.setFileName(foto.getFileName() + UUID.randomUUID());
        }

        fotoRepository.persist(foto);
        
        FotoDto fotoDto = fotoServico.createResponse(foto);
        
        return fotoRepository
                .findByIdOptional(foto.getId())
                .map(pet -> Response.ok(fotoDto).build())
                .orElse(Response.status(Status.NOT_FOUND).build());
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response downloadFile(
        @PathParam("id") Long id) throws IOException {

        if(fotoResource.get(id) == null){
            return Response.ok(Response.Status.BAD_REQUEST).build();
        }

        Foto foto = fotoRepository.findById(id);
        
        FotoDto fotoDto = fotoServico.createResponse(foto);

        return fotoRepository
                .findByIdOptional(foto.getId())
                .map(pet -> Response.ok(fotoDto).build())
                .orElse(Response.status(Status.NOT_FOUND).build());
    }

	
	
}
