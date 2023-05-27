package Servicos;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;


import dados.Usuario;

import dto.UsuarioDto;

@ApplicationScoped
public class UsuarioServico {

	public List<Usuario> listUsuario(){
		return Usuario.listAll();
	}
	
	@Transactional
	public Usuario cadastroUsuario(UsuarioDto usuarioDto) {
		Usuario usuario = new Usuario();
		
		usuario.setNomeUsuario(usuarioDto.getNomeUsuario());
		usuario.setCpf(usuarioDto.getCpf());
		usuario.setDataNascimento(usuarioDto.getDataNascimento());
		usuario.setCelular(usuarioDto.getCelular());
		usuario.setEndereco(usuarioDto.getEndereco());
		usuario.setCep(usuarioDto.getCep());
		usuario.setEmail(usuarioDto.getEmail());
		usuario.setSenha(usuarioDto.getSenha());
		usuario.setAcesso(usuarioDto.getAcesso());
		usuario.setEstado(usuarioDto.getEstado());
		usuario.setCidade(usuarioDto.getCidade());
		usuario.persist();
		
		return usuario;
	}
	
	@Transactional
	public void updateUsuario(Long id, UsuarioDto usuarioDto) {
		
		Usuario usuario = new Usuario();
		
		Optional<Usuario> usuarioOp = Usuario.findByIdOptional(id);
		
		if(usuarioOp.isEmpty()) {
			throw new NullPointerException("Usuario not found");
		}
		
		usuario = usuarioOp.get();
		usuario.setNomeUsuario(usuarioDto.getNomeUsuario());
		usuario.setCpf(usuarioDto.getCpf());
		usuario.setDataNascimento(usuarioDto.getDataNascimento());
		usuario.setCelular(usuarioDto.getCelular());
		usuario.setEndereco(usuarioDto.getEndereco());
		usuario.setCep(usuarioDto.getCep());
		usuario.setEmail(usuarioDto.getEmail());
		usuario.setSenha(usuarioDto.getSenha());
		usuario.setAcesso(usuarioDto.getAcesso());
		usuario.setEstado(usuarioDto.getEstado());
		usuario.setCidade(usuarioDto.getCidade());
		usuario.persist();
	}
	
	@Transactional
	public void deleteUsuario(Long id) {
		
		Optional<Usuario> usuarioOp = Usuario.findByIdOptional(id);
		
		if (usuarioOp.isEmpty()) {
			throw new NullPointerException("usuario not found");
		}
		
		Usuario usuario = usuarioOp.get();
		
		usuario.delete();
	}
}
