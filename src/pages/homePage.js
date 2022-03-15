import React from "react";
import ListCard from "../components/listCard";
import MainLayout from "../layouts/mainLayout";

class HomePage extends React.Component {
    render() {
        return (
            <MainLayout>
                <ListCard />
            </MainLayout>
        )
    }
}

export default HomePage;