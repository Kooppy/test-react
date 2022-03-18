import React from "react";
import Header from "../components/home/header";
import ListCard from "../components/home/listCard";
import MainLayout from "../layouts/mainLayout";

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