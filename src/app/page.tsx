export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

        <iframe src="https://iframe.mediadelivery.net/embed/292578/1ec1e16c-4d60-426e-a8e0-af74c92aff1f?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
        loading="lazy"
         style= {{
          border : 0,
          position : "absolute",
          top : 0,
          height : "100%",
          width : "100%"

         }}

        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
        allowFullScreen={true}
        >
          </iframe>
          
    </main>
  );
}