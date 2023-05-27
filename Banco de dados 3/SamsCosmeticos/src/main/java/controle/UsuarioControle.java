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
import Servicos.UsuarioServico;
import dados.Categoria;
import dados.Usuario;
import dto.CategoriaDto;
import dto.UsuarioDto;

@Path("usuario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioControle {

	@Inject
	UsuarioServico service;
	
	@GET
	@Path("lista_usuario")
	public Response listUsuario() {
		
		List<Usuario> usuario = service.listUsuario();
		return Response.ok(usuario).build();
	}
	
	@POST
	@Path("cadastro_usuario")
	public Response cadastroUsuario(UsuarioDto usuarioDto) {
		Usuario usuario = service.cadastroUsuario(usuarioDto);
		return Response.ok(usuario).status(201).build();
	}
	
	@PUT
	@Path("{id}")
	public Response updateUsuario(@PathParam("id") Long id, UsuarioDto usuarioDto) {
		
		service.updateUsuario(id, usuarioDto);
		
		return Response.status(204).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteUsuario(@PathParam("id") Long id) {
		service.deleteUsuario(id);
		
		return Response.status(204).build();
	}
}
