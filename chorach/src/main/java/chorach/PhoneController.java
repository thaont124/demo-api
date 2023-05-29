package chorach;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import chorach.*;

@RestController
@RequestMapping(path = "/api", produces = "application/json")
public class PhoneController {
	
	@Autowired
	public repository phoneRepository;
	
	@GetMapping
	public ResponseEntity<?> getList(){
		List<Phone> list = phoneRepository.findAll();
		return new ResponseEntity<>(list, HttpStatus.OK);
	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getPhoneById(@PathVariable Integer id){
		return new ResponseEntity<>(phoneRepository.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("/search/{key}")
	public ResponseEntity<?> search(@PathVariable String key){
		return new ResponseEntity<>(phoneRepository.search(key), HttpStatus.OK);
	}
	
}