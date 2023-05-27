package Servicos;


import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.zip.GZIPOutputStream;
import javax.enterprise.context.ApplicationScoped;

import javax.xml.bind.DatatypeConverter;
import org.apache.commons.io.IOUtils;


import dados.Foto;

import dados.UploadFoto;
import dto.FotoDto;


@ApplicationScoped
public class FotoServico {
	
	public FotoDto createResponse(Foto foto){
        
		FotoDto fotoDto = new FotoDto();

        byte[] decodedAsIs = Base64.getUrlDecoder().decode(foto.getFile());

        String decoded = DatatypeConverter.printBase64Binary(decodedAsIs);

        String imageFile = new String("data:image/"+ foto.getFileExtension() +";base64," + decoded);
        
        fotoDto.setId(foto.getId());
        fotoDto.setFile(imageFile);
        fotoDto.setFileName(foto.getFileName());
        fotoDto.setFileExtension(foto.getFileExtension());

        return fotoDto;
    }

    public Foto createRequest(UploadFoto uploadFoto) throws IOException{

        Foto foto = new Foto();

        try {
          byte[] compressed = IOUtils.toByteArray(uploadFoto.getFile());
          byte[] encodedAsBytes = Base64.getUrlEncoder().encode(compressed);
                    
          foto.setFile(encodedAsBytes);
          foto.setFileName(uploadFoto.getFileName());
          foto.setFileExtension(uploadFoto.getFileExtension());
          
        } catch (Exception e) {
          e.printStackTrace();
        }

        return foto;
    }
    
    public static byte[] compress(final byte[] bytesImage) throws IOException {
        if ((bytesImage == null) || (bytesImage.toString().length() == 0)) {
          return null;
        }
        ByteArrayOutputStream obj = new ByteArrayOutputStream();
        GZIPOutputStream gzip = new GZIPOutputStream(obj);
        gzip.write(bytesImage);
        gzip.flush();
        gzip.close();
        return obj.toByteArray();
      }
	
   
    
}
