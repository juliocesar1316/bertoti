package controle;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import Servicos.MarcaServico;
import dados.Marca;
import dto.MarcaDto;


@Path("marca")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class MarcaControle {
	
	@Inject
	MarcaServico service;
	
	@GET
	@Path("lista_marca")
	public Response listMarca() {
		
		List<Marca> marca= service.listMarca();
		return Response.ok(marca).build();
	}
	
	@POST
	@Path("cadastro_marca")
	public Response cadastroMarca(MarcaDto marcaDto) {
		Marca marca= service.cadastroMarca(marcaDto);
		return Response.ok(marca).status(201).build();
	}
	
	@PUT
	@Path("{id}")
	public Response updateMarca(@PathParam("id") Long id, MarcaDto marcaDto) {
		
		service.updateMarca(id, marcaDto);
		
		return Response.status(204).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteMarca(@PathParam("id") Long id) {
		service.deleteMarca(id);
		
		return Response.status(204).build();
	}
}
