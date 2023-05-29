package chorach;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Phone {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private Date nsxDate;
	private String branch;
	private int sold;
	
	public Phone() {
	}
	public Phone(Integer id, String name, Date nsxDate, String branch, int sold) {
		this.id = id;
		this.name = name;
		this.nsxDate = nsxDate;
		this.branch = branch;
		this.sold = sold;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getNsxDate() {
		return nsxDate;
	}
	public void setNsxDate(Date nsxDate) {
		this.nsxDate = nsxDate;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getSold() {
		return sold;
	}
	public void setSold(int sold) {
		this.sold = sold;
	}
	
}
