package com.maisondhote.perfect.RestController;

import com.maisondhote.perfect.Entite.Admin;
import com.maisondhote.perfect.Repository.AdminRepository;
import com.maisondhote.perfect.Service.AdminService;
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
@RequestMapping(value ="/admin")
public class AdminRestController {
    private AdminRepository adminRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired

    public AdminRestController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;



    }
    @Autowired
    AdminService adminService;
    @RequestMapping(method = RequestMethod.POST )
    public Admin ajoutAdmin(@RequestBody Admin admin){
        admin.setMotdepasse(this.bCryptPasswordEncoder.encode(admin.getMotdepasse()));
        Admin savedUser = adminRepository.save(admin);
        return adminService.ajouterAdmin(admin);
    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Admin modifieradmin(@PathVariable("id")Long id, @RequestBody Admin admin){
        admin.setMotdepasse(this.bCryptPasswordEncoder.encode(admin.getMotdepasse()));
        Admin savedUser = adminRepository.save(admin);

        Admin newAdmin = adminService.modifierAdmin(admin);
        return newAdmin;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppAdmin(@PathVariable("id") long id){
        adminService.supprimerById(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Admin> afficherAdmin(){
        return adminService.listeadmin();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Admin> getAdminById(@PathVariable("id") long id){

        Optional<Admin> admin = adminService.getAdminById(id);
        return admin;
    }


    /*@PostMapping(path = "register")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        admin.setMp(this.bCryptPasswordEncoder.encode(admin.getMp()));
        Admin savedUser = adminRepository.save(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
*/
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginAdmin(@RequestBody Admin admin) {
        System.out.println("in login-admin"+admin);
        HashMap<String, Object> response = new HashMap<>();

        Admin userFromDB = adminRepository.findAdminByEmail(admin.getEmail());
        System.out.println("userFromDB+admin"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "Admin not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(admin.getMotdepasse(), userFromDB.getMotdepasse());
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
                response.put("role",userFromDB.getRole());
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }
}
