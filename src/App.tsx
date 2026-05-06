import './App.css'
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Layout } from './Layout/Layout';
import { Footer } from './Footer/Footer';
import { Modal } from "./Modal/Modal";
import { dataText, dataModal, dataNavigation, dataSmall } from './data';

function App() {
    const historyData: typeof dataText = dataText;
    const modalData: typeof dataModal = dataModal;

    return (
        <>
            <Navigation
                icon={dataNavigation.Nav.icon}
                links={dataNavigation.Nav.links}
            />
            <Header
                title={dataSmall.Header.title}
                text={dataSmall.Header.text}
                img={dataSmall.Header.img}
            />
            <Layout
                title={historyData.History.title}
                description={historyData.History.text}
                src={historyData.History.src}
                img={historyData.History.img}
                anchor={historyData.History.anchor}
            />
            <Layout
                title={historyData.Monument.title}
                anchor={historyData.Monument.anchor}
            >
                {Object.keys(modalData).map((key) => {
                    if (key.split('-')[0] === "Monument") {
                        const item = modalData[key as keyof typeof modalData];
                        return (
                            <Modal
                                type="monument"
                                key={key}
                                title={item.title}
                                src={item.src}
                                shortDescription={item.text}
                                fullDescription={item.fullDescription}
                            />
                        );
                    }
                    return null;
                })}
            </Layout>
            <Layout
                title={historyData.Factory.title}
                anchor={historyData.Factory.anchor}
                description={historyData.Factory.text}
                src={historyData.Factory.src}
                img={historyData.Factory.img}
            >
                {Object.keys(modalData).map((key) => {
                    if (key.split('-')[0] === "Factory") {
                        const item = modalData[key as keyof typeof modalData];
                        return (
                            <Modal
                                type="factory"
                                key={key}
                                title={item.title}
                                src={item.src}
                                shortDescription={item.text}
                                fullDescription={item.fullDescription}
                            />
                        );
                    }
                    return null;
                })}
            </Layout>
            <Layout
                title={historyData.Rest.title}
                anchor={historyData.Rest.anchor}
            >
                {Object.keys(modalData).map((key) => {
                    if (key.split('-')[0] === "Rest") {
                        const item = modalData[key as keyof typeof modalData];
                        return (
                            <Modal
                                type="rest"
                                key={key}
                                title={item.title}
                                src={item.src}
                                shortDescription={item.text}
                                fullDescription={item.fullDescription}
                            />
                        );
                    }
                    return null;
                })}
            </Layout>
            <Footer
                title={dataSmall.Footer.title}
            />
        </>
    )
}

export default App