package br.com.tila.api.controllers;

import br.com.tila.api.repositories.ResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private ResponsavelRepository responsavelRepository;

    @GetMapping("/estatisticas")
    public ResponseEntity<Map<String, Object>> getAdminStats() {
        long totalUsuarios = responsavelRepository.count();
        long usuariosAtivos = responsavelRepository.countByAtivoTrue();
        long senhasTrocadas = responsavelRepository.countBySenhaUltimaAlteracaoIsNotNull();
        long usuariosComAcessibilidade = responsavelRepository.countByUsaAcessibilidadeTrue();
        long paisComUmFilho = responsavelRepository.findResponsaveisComUmUnicoFilho().size();

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsuariosCadastrados", totalUsuarios);
        stats.put("totalUsuariosAtivos", usuariosAtivos);
        stats.put("totalUsuariosQueTrocaramSenha", senhasTrocadas);
        stats.put("totalPaisComUmFilho", paisComUmFilho);
        stats.put("totalUsuariosComAcessibilidade", usuariosComAcessibilidade);

        return ResponseEntity.ok(stats);
    }
}