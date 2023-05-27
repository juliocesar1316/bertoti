package controle;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import dados.FormData;

@Path("/pdf")
public class PdfControle {
	   
	@POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
	@Path("{nome}")
    public Response uploadPdf(@PathParam("nome") String fileName, @MultipartForm FormData formData) {
        try {
            InputStream fileInputStream = formData.getFileData();
            OutputStream outputStream = new FileOutputStream("D:/Facul/BD3/pdf/" + fileName +".pdf");
            int read;
            byte[] bytes = new byte[4096];
            while ((read = fileInputStream.read(bytes)) != -1) {
                outputStream.write(bytes, 0, read);
            }
            outputStream.close();
            return Response.ok("Arquivo PDF salvo com sucesso!" + fileName).build();
        } catch (Exception e) {
            return Response.serverError().entity("Erro ao salvar o arquivo PDF.").build();
        }
    }
	    
}
