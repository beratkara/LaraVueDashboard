<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'surname' => $this->surname,
            'email' => $this->email,
            'code' => $this->code,
            'info' => PersonInfoResource::make($this->info),
            'has_role_permissions' => RolesResource::collection($this->rolesAndPermissions),
        ];
    }
}
