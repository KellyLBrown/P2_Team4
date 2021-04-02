package com.revature.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.revature.dao.ImageDao;
import com.revature.models.Image;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;



@RestController
@RequestMapping(value="/image")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class ImageController {

	
	private ImageDao iDao;
	
	@PostMapping(value="/upload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<String> uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {

	        System.out.println("Original Image Byte Size - " + file.getBytes().length);

	        Image img = new Image(0,file.getOriginalFilename(), file.getContentType(),compressBytes(file.getBytes()));
	        System.out.println(file.getOriginalFilename());
	        System.out.println(file.getContentType());
	        iDao.save(img);

	        return new ResponseEntity<>("Image uploaded",HttpStatus.OK);

	    }

	    @GetMapping(path = { "/get/{imageName}" })
	    public Image getImage(@PathVariable("imageName") String imageName) throws IOException {

	        final Optional<Image> retrievedImage = Optional.of(iDao.getImageByName(imageName));
	        Image img = new Image(retrievedImage.get().getId(), retrievedImage.get().getName(), retrievedImage.get().getType(),
	                decompressBytes(retrievedImage.get().getBytes()));

	        return img;
	    }
	    
	    @GetMapping(path = { "/get/all" })
	    public List<Image> getImages() throws IOException {
	    	// dont
	        final List<Image> retrievedImageList = iDao.findAll();
	        List<Image> imageList = new ArrayList<>();
	        for(Image i : retrievedImageList) {
	        	Image img = new Image(i.getId(), i.getName(), i.getType(),
		                decompressBytes(i.getBytes()));
	        	imageList.add(img);
	        }
	        
	        return imageList;
	    }

	    // compress the image bytes before storing it in the database

	    public static byte[] compressBytes(byte[] data) {
	        Deflater deflater = new Deflater();
	        deflater.setInput(data);
	        deflater.finish();
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	        byte[] buffer = new byte[1024];
	        while (!deflater.finished()) {
	            int count = deflater.deflate(buffer);
	            outputStream.write(buffer, 0, count);
	        }

	        try {
	            outputStream.close();
	        } catch (IOException e) {

	        }
	        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	        return outputStream.toByteArray();
	    }

	    // uncompress the image bytes before returning it to the angular application

	    public static byte[] decompressBytes(byte[] data) {
	        Inflater inflater = new Inflater();
	        inflater.setInput(data);
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	        byte[] buffer = new byte[1024];
	        try {
	            while (!inflater.finished()) {
	                int count = inflater.inflate(buffer);
	                outputStream.write(buffer, 0, count);
	            }
	            outputStream.close();
	        } catch (IOException ioe) {

	        } catch (DataFormatException e) {

	        }
	        return outputStream.toByteArray();
	    }


	}