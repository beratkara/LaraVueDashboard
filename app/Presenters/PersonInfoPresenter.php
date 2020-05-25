<?php

namespace App\Presenters;

use App\Transformers\PersonInfoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PersonInfoPresenter.
 *
 * @package namespace App\Presenters;
 */
class PersonInfoPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PersonInfoTransformer();
    }
}
