<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Dealers;

/**
 * Class DealersTransformer.
 *
 * @package namespace App\Transformers;
 */
class DealersTransformer extends TransformerAbstract
{
    /**
     * Transform the DealersResource entity.
     *
     * @param \App\Entities\Dealers $model
     *
     * @return array
     */
    public function transform(Dealers $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
