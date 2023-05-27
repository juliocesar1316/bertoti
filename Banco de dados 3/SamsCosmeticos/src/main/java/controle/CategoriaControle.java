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

import Servicos.CategoriaServico;
import dados.Categoria;
import dto.CategoriaDto;


@Path("categoria")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CategoriaControle {
	
	@Inject
	CategoriaServico service;
	
	@GET
	@Path("lista_categoria")
	public Response listCategoria() {
		
		List<Categoria> categoria = service.listCategoria();
		return Response.ok(categoria).build();
	}
	
	@POST
	@Path("cadastro_categoria")
	public Response cadastroCategoria(CategoriaDto categoriaDto) {
		Categoria categoria = service.cadastroCategoria(categoriaDto);
		return Response.ok(categoria).status(201).build();
	}
	
	@PUT
	@Path("{id}")
	public Response updateCategoria(@PathParam("id") Long id, CategoriaDto categoriaDto) {
		
		service.updateCategoria(id, categoriaDto);
		
		return Response.status(204).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteCategoria(@PathParam("id") Long id) {
		service.deleteCategoria(id);
		
		return Response.status(204).build();
	}
}
