import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

// Define an interface for the service object
interface Service {
  name: string;
  description: string;
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]); // Use the Service interface

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, "services"));
      const services = querySnapshot.docs.map(doc => doc.data() as Service); // Cast to Service type
      setServices(services);
    };
    fetchServices();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white h-screen flex items-center justify-center relative">
        <h1 className="text-5xl font-bold mb-4">Welcome to Azania Teen Coaching</h1>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
