export interface CustomActionRequest {
  user_point_id: string;
  instance_id: string; // custom action id, used to fetch the instance context, aka the instance configuration
}

export interface CustomActionPluginResponse {
  status: "ok" | "ko";
}

export interface CustomAction {
  id: string;
  name: string;
  organisation_id: string;
  group_id: string;
  artifact_id: string;
  creation_ts: number;
  created_by: string;
  version_id: string;
  version_value: string;
}
