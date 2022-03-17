import React from "react";
import Header from "../components/home/header";
import ListCard from "../components/home/listCard";
import MainLayout from "../layouts/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, postMessage } from '../store/actions/contactActions'

// const dispatch = useDispatch()
// const [name, setName] = useState("");
// const message = useSelector(state => state.message.flash)

// useEffect(() => {
//   dispatch(getMessage())
// }, [])

// // ici la fonction est asynchrone
// const handleForm = async (e) => {
//   e.preventDefault();
//   console.log("submit form register", name); 

//   if (name) {
//     await dispatch(postMessage({ name }));
//     setName("");
//   }
// };

class HomePage extends React.Component {

    render() {
        return (
            <MainLayout>
                <Header />
                <ListCard />
            </MainLayout>
        )
    }
}

export default HomePage;