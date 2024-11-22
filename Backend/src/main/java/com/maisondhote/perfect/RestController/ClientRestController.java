package com.maisondhote.perfect.RestController;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Entite.Client;
import com.maisondhote.perfect.Repository.ClientRepository;
import com.maisondhote.perfect.Service.ClientService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/client")
public class ClientRestController {
    private ClientRepository clientRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    @Autowired
    public ClientRestController(ClientRepository clientRepository){
        this.clientRepository= clientRepository;
    }
    @Autowired
    ClientService clientService;
    @RequestMapping(method = RequestMethod.POST )

    public Client ajoutClient(@RequestBody Client client){
        client.setMdp(this.bCryptPasswordEncoder.encode(client.getMdp()));
        Client savedUser = clientRepository.save(client);
        return clientService.ajouterClient(client);

    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Client modifierclient(@PathVariable("id")Long id, @RequestBody Client client){
        client.setMdp(this.bCryptPasswordEncoder.encode(client.getMdp()));
        Client savedUser = clientRepository.save(client);

        Client newClient = clientService.modifierClient(client);
        return newClient;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppClient(@PathVariable("id") long id){
        clientService.supprimerClient(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Client> afficherClient(){
        return clientService.listeclient();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Client> getClientById(@PathVariable("id") long id){

        Optional<Client> client = clientService.getclientbyid(id);
        return client;
    }


    /*@PostMapping(path = "register")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        admin.setMp(this.bCryptPasswordEncoder.encode(admin.getMp()));
        Admin savedUser = adminRepository.save(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
*/
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginAdmin(@RequestBody Client client) {
        System.out.println("in login-admin"+client);
        HashMap<String, Object> response = new HashMap<>();

        Client userFromDB = clientRepository.findByEmail(client.getEmail());
        System.out.println("userFromDB+admin"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "Admin not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(client.getMdp(), userFromDB.getMdp());
            System.out.println("compare"+compare);
            if (!compare) {
                response.put("message", "admin not found !");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }else
            {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);
                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }

}
