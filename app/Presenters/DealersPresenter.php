<?php

namespace App\Presenters;

use App\Transformers\DealersTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class DealersPresenter.
 *
 * @package namespace App\Presenters;
 */
class DealersPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new DealersTransformer();
    }
}
