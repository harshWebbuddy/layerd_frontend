import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns";
 import * as z from "zod";
 export interface PlanUsage {
  usage: {
    no_of_text_to_video: number;
    no_of_text_to_avatar: number;
    ai_wizard_credits: boolean;
    text_to_video_credits: number;
    ai_worfklow_credits: number;
    product_ai_credits: number;
    social_media_posting: boolean;
    social_media_conversation: boolean;
    social_media_analytics: boolean;
    webscraping_available: boolean;
    webscraping_and_contact: number;
    ai_background_generator_credits: number;
  };
  _id: string;
  plan_id: string;
  user_id: string;
  stripe_subscription_id: string;
  text_to_video_pricing: number;
  product_ai_pricing: number;
  usage_start_date: string;
  usage_expiry_date: string;
  usage_amount: number;
  plan_type: "MONTHLY" | "YEARLY" | string;
  createdAt: string;
  updatedAt: string;
  isFreeCouponApplied: boolean;
  plan_name:string
}

export interface Plan {
  features: string[];
  _id: string;
  plan: string;
  plan_type: string;
  plan_id: string;
  stripe_price_id: string;
  price: number;
  text_to_avatar_cost: number;
  text_to_video_cost: number;
  ai_background_generator_cost: number;
  max_yearly_discount: number;
  createdAt: string;
  updatedAt: string;
}

export type InputType = {
  variable_label: string;
  variable_type: string;
  variable_value: any;
  variable_values: any;
  is_prompt?: boolean;
};

export interface Usage {
  ai_chat: boolean;
  ai_playground: boolean;
  ai_assistant: boolean;
  ai_custom_gpt: boolean;
  ai_templates: boolean;
  ai_wizard: boolean;
  no_of_text_to_avatar: number;
  no_of_text_to_video: number;
  ai_background_generator_credits: number;
  social_media_posting: boolean;
  social_media_conversation: boolean;
  whatsapp_automation: boolean;
  telegram_automation: boolean;
  social_media_analytics: boolean;
  social_media_ai_insights: boolean;
  recommendation_engine: boolean;
  content_calendar: boolean;
  ai_worfklow_credits: number;
  webscraping: boolean;
  contacts_repository: boolean;
  contact_intelligence: boolean;
  linkedin_agent: boolean;
  mdr_agent: boolean;
}

interface ExceptRoute {
  ancestorRoute: string;
  exceptPath: string[];
}

interface Route {
  path: string;
  partialMatch: boolean;
  excepts?: ExceptRoute[];
}

export interface FeatureRouteMap {
  [key: string]: Route[];
}

export interface UserPlan {
  _id: string;
  plan_id: string;
  user_id: string;
  plan_name: string;
  plan_type?: string;
  plan_amount: number;
  ai_background_generator_cost: number;
  smart_ai_messages: number;
  fast_ai_messages: number;
  usage_expiry_date: string;
  no_of_messages: number;
  usage_amount: number;
  usage: Usage;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ChatResponse {
  response: string;
  conversation_id: string;
  response_type: "TEXT" | "IMAGE" | "VIDEO";
  noOfMessagesLeft?: number;
  totalMessages?: number;
  chatId: string;
  isImage?: boolean;
  totalNoOfMessages?:any
}

export interface BrandVoice {
  _id: string;
  user_id: string;
  brand_name: string;
  websites: string[];
  brand_voice: string;
  description?: string; // Optional field
  document_url: string;
  is_default: boolean;
  createdAt: string;
  updatedAt: string;
}

/* eslint-disable no-unused-vars */
export enum ALL_ROUTES {
  ROOT = "/",
  APP = "/app",
  LOGIN = "/auth/login",
  PRICING = "/pricing",
  UPGRADE = "/Upgrade",
  PAYMENT = "/Payment",
  AI_ASSISTANT = "/app/ai-studio/ai-assistant",
  SINGLE_AI_ASSISTANT_CHAT = "/app/ai-studio/ai-assistant/chat/:id",
  AI_CHAT = "/app/ai-studio/ai-chat",
  AI_CUSTOM_GPT = "/app/ai-studio/custom-gpts",
  TEXT_TO_AVATAR = "/app/ai-studio/text-to-avatar",
  TEXT_TO_AVATAR_MY_AVATARS = "/app/social-portal/text-to-avatar/my-avatars",
  AI_CUSTOM_GPT_NEW = "/app/ai-studio/custom-gpts/new",
  AI_CUSTOM_GPTS = "/app/ai-studio/custom-gpts/gpt",
  AI_PLAYGROUND = "/app/ai-studio/ai-playground",
  AI_TEMPLATE = "/app/ai-studio/ai-templates",
  SINGLE_AI_TEMPLATE = "/app/ai-studio/ai-templates/:id",
  CREATE_AI_TEMPLATE = "/app/ai-studio/ai-templates/create-template",
  AI_WIZARD = "/app/ai-studio/ai-articles",
  CONTACT_REPOSITORY = "/app/engage/contacts",
  CONTACT_REPOSITORY_SETTINGS = "/app/engage/contacts/settings",
  WEB_SCRAPING = "/app/engage/web-scraping",
  SOCIAL_MEDIA_POSTING = "/app/publish/scheduler/quick-posting",
  SOCIAL_MEDIA_POSTING_CONNECT = "/app/publish/scheduler/quick-posting/profiles/connect-account",
  SOCIAL_MEDIA_POSTING_CONNECT_FINISH = "/app/publish/scheduler/quick-posting/profiles/connect-account/finish",
  SOCIAL_MEDIA_CONVERSATION_HUB = "/app/engage/Social-media",
  SOCIAL_MEDIA_ANALYSIS = "/app/analyse/social-media",
  BRAND_VOICE = "/account/ai-brandvoice",
  WORKFLOW_BUILDER = "/app/automation-hub/workflow-builder",
  WORKFLOW_BUILDER_CREATE = "/app/automation-hub/workflow-builder/create-workflow",
  ALL_WORKFLOW_BUILDER = "/app/automation-hub/workflow-builder/workflows",
  AI_BACKGROUND_GENERATOR = "/app/ai-studio/product-ai",
  WORKFLOW_CANVAS_CREATE = "/app/workflow/",
  WORKFLOW_DASHBOARD = "/app/dashboard",
}

export const featureRouteMap: FeatureRouteMap = {
  ai_assistant: [
    { path: ALL_ROUTES.AI_ASSISTANT, partialMatch: false },
    { path: ALL_ROUTES.SINGLE_AI_ASSISTANT_CHAT, partialMatch: true },
  ],
  ai_playground: [{ path: ALL_ROUTES.AI_PLAYGROUND, partialMatch: false }],
  ai_chat: [
    { path: ALL_ROUTES.AI_CHAT, partialMatch: false },
    { path: ALL_ROUTES.AI_CHAT, partialMatch: false },
  ],
  ai_custom_gpt: [
    { path: ALL_ROUTES.AI_CUSTOM_GPT, partialMatch: false },
    { path: ALL_ROUTES.AI_CUSTOM_GPT_NEW, partialMatch: false },
    { path: ALL_ROUTES.AI_CUSTOM_GPTS, partialMatch: false },
  ],
  ai_templates: [
    { path: ALL_ROUTES.AI_TEMPLATE, partialMatch: false },
    {
      path: ALL_ROUTES.SINGLE_AI_TEMPLATE,
      partialMatch: true,
      excepts: [
        {
          ancestorRoute: "/ai-templates",
          exceptPath: ["/create-template", "/update-template"],
        },
      ],
    },
  ],
  ai_wizard: [{ path: ALL_ROUTES.AI_WIZARD, partialMatch: false }],
  webscraping: [{ path: ALL_ROUTES.WEB_SCRAPING, partialMatch: false }],
  social_media_posting: [
    { path: ALL_ROUTES.SOCIAL_MEDIA_POSTING, partialMatch: false },
    { path: ALL_ROUTES.SOCIAL_MEDIA_POSTING_CONNECT, partialMatch: false },
    {
      path: ALL_ROUTES.SOCIAL_MEDIA_POSTING_CONNECT_FINISH,
      partialMatch: false,
    },
  ],
  social_media_conversation: [
    { path: ALL_ROUTES.SOCIAL_MEDIA_CONVERSATION_HUB, partialMatch: false },
  ],
  social_media_analytics: [
    { path: ALL_ROUTES.SOCIAL_MEDIA_ANALYSIS, partialMatch: false },
  ],
  contacts_repository: [
    { path: ALL_ROUTES.CONTACT_REPOSITORY, partialMatch: false },
    { path: ALL_ROUTES.CONTACT_REPOSITORY_SETTINGS, partialMatch: false },
  ],
};

export const brandVoiceAnalyzeFormSchema = z.object({
  urls: z.array(z.string().max(255)).optional(),
  description: z.string().max(2000).optional(),
  file: z.any().optional(),
});

export const brandVoiceFormSchema = z.object({
  brandName: z.string().min(1, { message: "Required" }).max(255),
  brandVoice: z.string().max(5000).optional(),
  isDefault: z.boolean().optional(),
});

export const urlRegex = new RegExp(
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
);

export enum PlanName {
  FREE = "FREE",
  SOCIAL_PORTAL = "Social Portal",
  AI_STUDIO = "AI Studio",
  AUTOMATION_HUB = "Automation Hub",
  BUSINESS = "BUSINESS",
  AI_ESSENTIALS = "AI Essentials",
}

export enum InputFieldType {
  SHORT_TEXT = "SHORT_TEXT",
  LONG_TEXT = "LONG_TEXT",
  SELECT_LIST = "SELECT_LIST",
  CHECKBOX = "CHECKBOX",
  RADIO = "RADIO",
}

export enum WorkflowInputFieldType {
  SHORT_TEXT = "SHORT_TEXT",
  LONG_TEXT = "LONG_TEXT",
  BOOLEAN = "BOOLEAN",
  NUMBER = "NUMBER",
  CHECKLIST = "CHECKLIST",
  FILE_UPLOAD = "FILE_UPLOAD",
}



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(isoDate: string): string {
  return format(parseISO(isoDate), "MMM dd yyyy hh:mm a");
}

export const isEmptyObject = (obj: object | undefined | null): boolean => {
  if (obj === undefined || obj === null) return true;
  return Object.keys(obj).length === 0;
};

export function isMobile() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;

  return isTouchDevice && isSmallScreen;
}

export function getUserFriendlyPlanName(
  planName: PlanName
): string | undefined {
  const userFriendlyPlanNameMap = new Map<PlanName, string>([
    [PlanName.FREE, "Free"],
    [PlanName.SOCIAL_PORTAL, "Social Portal"],
    [PlanName.AI_STUDIO, "AI Studio"],
    [PlanName.AUTOMATION_HUB, "Automation Hub"],
    [PlanName.BUSINESS, "Business"],
    [PlanName.AI_ESSENTIALS, "AI Essentials"],
  ]);

  const userFriendlyPlanName = userFriendlyPlanNameMap.get(planName);

  return userFriendlyPlanName;
}

export const planIdsMap: Record<PlanName, string[]> = {
  [PlanName.FREE]: ["grs/free"],
  [PlanName.SOCIAL_PORTAL]: [
    "grs/creator/monthly_planjh4qViTCP2gsvT",
    "grs/creator/yearly_planWfodY4MFnK074E",
  ],
  [PlanName.AI_STUDIO]: [
    "grs/pro/monthly_plan002mLAqmLKnWAk",
    "grs/pro/yearly_plan8OT7i48BejFfMI",
  ],
  [PlanName.AUTOMATION_HUB]: [
    "grs/advanced_pro/monthly_planIsLCnfld6wkjWB",
    "grs/advanced_pro/yearly_planlsjArmd2EoVuhr",
  ],
  [PlanName.BUSINESS]: [
    "grs/business/monthly_planhsPv4QB1ZZ1vS1",
    "grs/business/yearly_plannB1eoCa7NOhmfh",
  ],
  [PlanName.AI_ESSENTIALS]: [
    "grs/basic_plan",
    "grs/basic/yearly_planyrwjxt3Jh4i3iU",
  ],
};

export const hasAccessToRoute = (
  currentPlanUsage: any,
  pathname: string
): boolean => {
  let routeExistsInMap = false;

  for (const feature in featureRouteMap) {
    const routes = featureRouteMap[feature];

    for (const route of routes) {
      let matches = false;

      if (route.partialMatch) {
        const pathRegex = new RegExp(route.path.replace(/:[^\s/]+/g, "[^/]+"));
        matches = pathRegex.test(pathname);
      } else {
        matches = route.path === pathname;
      }

      if (matches) {
        routeExistsInMap = true;

        if (route?.excepts) {
          for (const except of route.excepts) {
            const ancestorPathRegex = new RegExp(
              `${except.ancestorRoute}(\\/[^/]+)?$`
            );

            if (ancestorPathRegex.test(pathname)) {
              for (const exceptPath of except.exceptPath) {
                const exceptRegex = new RegExp(
                  exceptPath.replace(/:[^\s/]+/g, "[^/]+")
                );

                if (exceptRegex.test(pathname)) {
                  return true;
                }
              }
            }
          }
        }

        if (currentPlanUsage[feature]) {
          return true;
        }
      }
    }
  }

  if (!routeExistsInMap) {
    return true;
  }

  return false;
};

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function parseJsonString(str: string): any {
  try {
    return JSON.parse(str);
  } catch (e) {
    return "";
  }
}
