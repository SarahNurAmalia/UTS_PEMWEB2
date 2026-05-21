import type { Request, Response } from "express";
export declare const getAllSpeaker: (req: Request, res: Response) => Promise<void>;
export declare const createSpeaker: (req: Request, res: Response) => Promise<void>;
export declare const speakerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateById: (req: Request, res: Response) => Promise<void>;
export declare const deleteById: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=speakerConntroller.d.ts.map