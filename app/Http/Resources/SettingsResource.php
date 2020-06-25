<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingsResource extends JsonResource
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
            'info' => PersonInfoResource::make($this->info),
            'permissions' => PermissionsResource::collection($this->whenLoaded('permissions')),
            'roles' => RolesResource::collection($this->whenLoaded('roles')),
        ];
    }
}
