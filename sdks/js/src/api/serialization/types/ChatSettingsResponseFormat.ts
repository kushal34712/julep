/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";

export const ChatSettingsResponseFormat: core.serialization.ObjectSchema<
    serializers.ChatSettingsResponseFormat.Raw,
    JulepApi.ChatSettingsResponseFormat
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).ChatSettingsResponseFormatType).optional(),
});

export declare namespace ChatSettingsResponseFormat {
    interface Raw {
        type?: serializers.ChatSettingsResponseFormatType.Raw | null;
    }
}