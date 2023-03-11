import Form from './components/Form';
import BookList from './components/BookList';

export default function App(){
    return(
        <div className="app">
            <BookList />
            <div className="form-placeholder">
                <Form />
            </div>
        </div>
    );
}