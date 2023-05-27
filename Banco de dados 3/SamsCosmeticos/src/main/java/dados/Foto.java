package dados;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table (name= "foto")
public class Foto {
	
	@Id
	@SequenceGenerator(
            name = "foto_id",
            sequenceName = "foto_id_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "foto_id")
    private Long id;

    private byte[] file;
    
    private String filee;

    private String fileName;
    
    private String fileExtension;
    
    private Long codFoto;

    
    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileExtension() {
        return fileExtension;
    }

    public void setFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getFilee() {
		return filee;
	}

	public void setFilee(String filee) {
		this.filee = filee;
	}

	public Long getCodFoto() {
		return codFoto;
	}

	public void setCodFoto(Long codFoto) {
		this.codFoto = codFoto;
	}

	
}
