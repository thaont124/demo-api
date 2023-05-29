package chorach;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import chorach.Phone;
@Repository
public interface repository extends JpaRepository<Phone, Integer>{
	@Query("SELECT p FROM Phone p WHERE p.name LIKE %:key% OR p.branch LIKE %:key%")
	List<Phone> search(@Param("key") String key);
}
