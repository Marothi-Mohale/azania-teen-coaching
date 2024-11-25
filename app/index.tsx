import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface AzaniaTeenCoach {
    name: string;
    age: number;
}

const IndexPage = () => {
    const [data, setData] = useState<AzaniaTeenCoach[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "Azania teen coaches"));
            setData(querySnapshot.docs.map((doc) => doc.data() as AzaniaTeenCoach));
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Azania Teen Coaches</h1>
            <ul>
                {data.map((coach, index) => (
                    <li key={index}>
                        {coach.name} - Age: {coach.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
