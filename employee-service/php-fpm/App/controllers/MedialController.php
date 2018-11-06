<?php

namespace Controllers;

use Models\Media;

class MedialController extends ApiController
{
    public function __construct()
    {
        $this->_model = new Media();                                                                                                                                                                
        parent::__construct();
        $this->_inputs = $this->inputs();
    }

    public function post()
    {
        try {
            $this->_inputs = $this->inputs();

            $insert = $s3->putObject([
                'Bucket' => 'image',
                'Key'    => uniqid(),
                'Body'   => 'Hello from Minio!!'
            ]);
            // $this->_model = new LetterTemplate();
            $this->_model->_data = (array) $this->_inputs;
            $this->_model->_data['body'] = json_encode( $this->_model->_data['body'] );
            $id = $this->_model->save();
            $data = [
                'id' => $id,
            ];
            $this->response($data, 200, 'success');
        } catch (Exception $e) {
            $this->response($e, 502, 'error');
        }

    }

    public function put()
    {
        try {
            $this->_inputs = $this->inputs();
            // $this->_model = new LetterTemplate();
            $this->_model->_data = (array) $this->_inputs;
            $this->_model->_data['body'] = json_encode((array) $this->_model->_data['body'] );
            $id = $this->_model->update();
            $data = [
                'id' => $id,
            ];
            $this->response($data, 200, 'success');
        } catch (Exception $e) {
            $this->response($e, 502, 'error');
        }

    }

}
