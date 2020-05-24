<?php

namespace App\Http\Requests\dealers;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:dealers,name',
            'user' => 'nullable',
            'user.uuid' => 'required_with:user|exists:users,uuid'
        ];
    }
}
