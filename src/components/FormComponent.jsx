const FormComponent = ({ handleSubmit, setInputValue, inputValue }) => {

    return (
        <form action="" className='d-flex flex-column py-5' onSubmit={handleSubmit}>

            <label htmlFor="newArticle" className="form-label">Inserisci un nuovo articolo</label>
            <div className='d-flex  justify-content-between'>
                <input type="text" className="form-control" id="newArticle" value={inputValue} autoComplete='off' onChange={event => (setInputValue(event.target.value)
                )} />

                <button type='submit' className='btn btn-primary'>Aggiungi</button>

            </div>


        </form>
    )
}

export default FormComponent;