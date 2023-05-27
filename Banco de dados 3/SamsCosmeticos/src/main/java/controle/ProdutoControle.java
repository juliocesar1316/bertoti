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



import Servicos.ProdutoServico;
import dados.Produto;
import dto.ProdutoDto;

@Path("produto")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ProdutoControle {
	
	@Inject
	ProdutoServico service;
	
	@GET
	@Path("lista_produto")
	public Response listProduto() {
		
		List<Produto> produtos = service.listProduto();
		return Response.ok(produtos).build();
	}
	
	@POST
	@Path("cadastro_produto")
	public Response cadastroProduto(ProdutoDto produtoDto) {
		Produto produto = service.cadastroProduto(produtoDto);
		
		return Response.ok(produto).status(201).build();
	}
	
	@PUT
	@Path("{id}")
	public Response updateProduto(@PathParam("id") Long id, ProdutoDto produtoDto) {
		
		service.updateProduto(id, produtoDto);
		
		return Response.status(204).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteProduto(@PathParam("id") Long id) {
		service.deleteProduto(id);
		
		return Response.status(204).build();
	}
}
