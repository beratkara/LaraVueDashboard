<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\PersonInfo;

/**
 * Class PersonInfoTransformer.
 *
 * @package namespace App\Transformers;
 */
class PersonInfoTransformer extends TransformerAbstract
{
    /**
     * Transform the PersonInfo entity.
     *
     * @param \App\Entities\PersonInfo $model
     *
     * @return array
     */
    public function transform(PersonInfo $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
