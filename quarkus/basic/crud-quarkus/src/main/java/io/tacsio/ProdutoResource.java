package io.tacsio;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("produtos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProdutoResource {

  @GET
  public List<Produto> buscarTodosProdutos() {
    return Produto.listAll();
  }

  @POST
  @Transactional
  public void adicionarProduto(CadastroProdutoDTO dto) {
    Produto p = new Produto();
    p.nome = dto.nome;
    p.valor = dto.valor;

    p.persist();
  }

  @PUT
  @Path("{id}")
  @Transactional
  public void atualizarProduto(@PathParam("id") Long id, CadastroProdutoDTO dto) {
    Optional<Produto> p = Produto.findByIdOptional(id);

    if (p.isPresent()) {
      Produto produto = p.get();
      produto.nome = dto.nome;
      produto.valor = dto.valor;
      produto.persist();
    } else {
      throw new NotFoundException();
    }
  }

  @DELETE
  @Path("{id}")
  @Transactional
  public void delete(@PathParam("id") Long id) {
    Optional<Produto> p = Produto.findByIdOptional(id);

    p.ifPresentOrElse(Produto::delete, () -> {
      throw new NotFoundException();
    });
  }
}